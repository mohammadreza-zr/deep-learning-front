import { useState } from 'react';
import { toast } from 'react-toastify';
import { apiService } from '../../base/services';

const Promote = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const result = await apiService.patch('auth/promote', {
        email,
      });
      console.log(result);
      if (result.status === 200) {
        setEmail('');
        toast('user promoted!');
      } else {
        toast(result.message);
      }
    } catch (err) {}
  };

  return (
    <div className="py-4">
      <form
        onSubmit={handleSubmit}
        className="md:w-96 mx-auto shadow rounded-xl p-4 border bg-white z-10"
      >
        <h1 className="text-3xl font-bold text-center pt-2 mb-4">Promote admins</h1>
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
        </div>
        <div>
          <button
            className="btn btn-lg w-full"
            data-ga-category="register"
            data-ga-label="register"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Promote;
