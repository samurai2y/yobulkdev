import Link from 'next/link';
import Sidebar from '../components/sidebar/Sidebar';
import Switcher from '../hooks/Switcher';

import { BsSlack, BsGithub } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [stars, setStars] = useState(0);
  useEffect(()=>{
    fetch('https://api.github.com/repos/yobulkdev/yobulkdev')
    .then(res=> res.json())
    .then(data=>setStars(data?.stargazers_count))
    .catch((e)=>console.log(e))
  },[])

  return (
    <div className="min-h-screen flex flex-nowrap">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="bg-gray-100 dark:bg-gray-800 flex items-center gap-2 justify-end px-4 py-2">
          <a
            href="https://yobulkdev.slack.com/join/shared_invite/zt-1kiutrmhx-6z_Mvq17dW0pPYePrwPocg#/shared-invite/email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Connect
              <BsSlack />
            </button>
          </a>
          <a
            href="https://github.com/yobulkdev/yobulkdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <BsGithub />{' '}Star us | {stars}
            </button>
          </a>
          <Switcher />
        </div>
        <div className="flex-1 bg-gray-100 dark:bg-gray-800">
          {children}{' '}
        </div>
      </div>
    </div>
  );
};

export default Layout;
