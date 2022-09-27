import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../base/hooks';
import { apiService } from '../../base/services';

const AdminPanel = () => {
  const fullName = useAppSelector((state) => state.auth.fullName);

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [hashtags, setHashtags] = useState<string>('');
  const textarea = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let bodyFormData = new FormData();
      bodyFormData.append('title', title);
      bodyFormData.append('body', body);
      bodyFormData.append('file', selectedImage);
      const tags = hashtags.split('-');
      for (let i = 0; i < tags.length; i++) {
        bodyFormData.append('hashtag', tags[i]);
      }
      const result = await apiService.post('/datasets/create', bodyFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (result.status === 201) {
        toast('dataset created!');
        setTitle('');
        setBody('');
        setHashtags('');
        selectedImage(null);
        if (textarea.current) {
          textarea.current.value = '';
        }
      } else {
        toast('Some Error!');
      }
    } catch (err) {}
  };
  return (
    <div className="mb-4">
      <form
        onSubmit={handleSubmit}
        className="mx-auto shadow rounded-xl p-4 border bg-white z-10"
      >
        <h1 className="text-3xl font-bold text-center pt-2 mb-4">Set new dataset</h1>
        <div className="grid grid-cols-1 gap-3 mb-8">
          <label>
            Title
            <input
              className="form-input"
              name="title"
              placeholder="Title"
              required
              type="text"
              onChange={(e: any) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            Image file
            <input
              className="form-input hidden"
              name="image"
              required
              type="file"
              accept="image/*"
              onChange={(e: any) => setSelectedImage(e.target.files[0])}
            />
          </label>
          <label>
            body
            <textarea
              className="form-input"
              onChange={(e: any) => setBody(e.target.value)}
              name="body"
              cols={30}
              rows={10}
              ref={textarea}
              value={body}
            ></textarea>
          </label>
          <label>
            Hashtags
            <input
              className="form-input"
              name="title"
              placeholder="hashtag1-hashtag2-hashtag3"
              required
              type="text"
              onChange={(e: any) => setHashtags(e.target.value)}
              value={hashtags}
            />
          </label>
        </div>
        <div className="flex justify-between">
          <p className="block text-center text-sm w-2/6 md:w-1/6 border border-gray-300 rounded-md py-2">
            {fullName}
          </p>
          <button className="btn btn-lg w-2/6 md:w-1/6" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPanel;
