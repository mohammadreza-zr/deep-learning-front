import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../base/hooks';
import { apiService } from '../../base/services';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { MyEditor } from '../../base/components';

let delayTimer: string | number | NodeJS.Timeout | undefined;
const AdminPanel = () => {
  const fullName = useAppSelector((state) => state.auth.fullName);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<any>('');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [hashtags, setHashtags] = useState<string>('');
  const [titleList, setTitleList] = useState<string[] | null>(null);
  const [focusOnTitleInput, setFocusOnTitleInput] = useState<boolean>(false);
  const [emptyContent, setEmptyContent] = useState<boolean>(false);

  const imageRef = useRef<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let bodyFormData = new FormData();
      bodyFormData.append('title', title);
      bodyFormData.append('body', content);
      bodyFormData.append('file', selectedImage);
      const tags = hashtags.split('-');
      for (let i = 0; i < tags.length; i++) {
        bodyFormData.append('hashtag', tags[i]);
        if (i < tags.length) {
          bodyFormData.append('hashtag', '');
        }
      }
      const result = await apiService.post('/datasets/create', bodyFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (result.status === 201) {
        toast('dataset created!');
        setTitle('');
        setContent('');
        setEmptyContent(true);
        setHashtags('');
        selectedImage(null);
        if (imageRef.current) {
          imageRef.current.value = '';
          imageRef.current.title = '';
        }
      } else {
        toast('Some Error!');
      }
    } catch (err) {}
  };

  const handleSearchTitle = async (e: any) => {
    setTitle(e.target.value);
    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => {
      fetchTitleList(e.target.value);
    }, 300);
  };

  const fetchTitleList = async (title: string) => {
    try {
      const result = await apiService.get(`/datasets/title/${title}`);
      if (result.status === 200) {
        if (Array.isArray(result.data)) setTitleList(result.data);
        else setTitleList(null);
      }
    } catch (err) {}
  };
  return (
    <div className="my-4">
      <form
        onSubmit={handleSubmit}
        className="mx-auto shadow rounded-xl p-4 border bg-white z-10"
      >
        <h1 className="text-3xl font-bold text-center pt-2 mb-4">Set new dataset</h1>
        <div className="grid grid-cols-1 gap-3 mb-8">
          <label className="relative">
            Title
            <input
              className="form-input"
              name="title"
              placeholder="Title"
              required
              type="text"
              onChange={handleSearchTitle}
              value={title}
              onClick={() => setFocusOnTitleInput(true)}
              onBlur={() => setFocusOnTitleInput(false)}
            />
            <ul
              className={`overflow-hidden absolute top-full -mt-2 w-full bg-white border-2 border-black border-t-0 rounded-b-md rounded-br-md p-4 transition-[visibility] ${
                focusOnTitleInput ? 'visible' : 'invisible h-0'
              }`}
            >
              {titleList?.map((title: any) => {
                return (
                  <li key={title.title} className="border-b border-gray-200 py-1">
                    {title.title}
                  </li>
                );
              })}
            </ul>
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
              ref={imageRef}
            />
          </label>
          <label>
            body
            <div className="form-input">
              <MyEditor
                setContent={setContent}
                empty={emptyContent}
                setEmptyContent={setEmptyContent}
              />
            </div>
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
