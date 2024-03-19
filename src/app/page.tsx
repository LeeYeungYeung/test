'use client'

import toast from 'react-hot-toast';
import Header from './assembly/header';
import ContentImages from './assembly/content';
import Footer from './assembly/footer';


export default function Page() {

  function handleButtonClick() {
    toast('欢迎，请尽情点击吧！', {
      icon: '😁'
    })
  }
  // handleButtonClick()
  // window.onload = () => handleButtonClick();
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24 ">
      <Header />

      {/* <button onClick={handleButtonClick}>Make me a toast</button> */}
      <ContentImages />

      <Footer />
    </main>
  );
}
