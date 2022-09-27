import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../base/hooks';
import { setLoading, setToken } from '../../base/redux';
import { apiService } from '../../base/services';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLogin = useAppSelector((state) => state.auth.isLogin);

  useEffect(() => {
    if (isLogin) {
      toast('You are login!');
      navigate('/', { replace: true });
    }
    return () => {};
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!email || !password) return toast('please full the fields');
      dispatch(setLoading(true));
      const body = {
        email,
        password,
      };
      const result = await apiService.post('auth/login', body);
      dispatch(setLoading(false));
      if (result.status === 201) {
        dispatch(setToken(result.data));
        toast(`Welcome `);
        navigate('/');
      } else {
        toast(result.message || 'Error!');
      }
    } catch (err) {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="py-4">
      <form
        onSubmit={handleSubmit}
        className="md:w-96 mx-auto shadow rounded-xl p-4 border bg-white z-10"
      >
        <h1 className="text-3xl font-bold text-center pt-2 mb-4">Login</h1>
        <div className="grid grid-cols-1 gap-3 mb-8">
          <label>
            Email Address
            <input
              autoComplete="email"
              className="form-input"
              name="email"
              placeholder="Email Address"
              required
              type="email"
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            Password
            <input
              autoComplete="new-password"
              className="form-input"
              maxLength={250}
              minLength={8}
              name="password"
              placeholder="Password"
              required
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        <div>
          <button
            className="btn btn-lg w-full"
            data-ga-category="register"
            data-ga-action="clicked on next"
            data-ga-label="register"
            type="submit"
          >
            Next
          </button>
          <p className="block text-center mt-3 text-sm">
            Don&apos;t have an account?
            <Link className="underline ml-2" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
