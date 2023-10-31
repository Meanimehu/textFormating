import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // Import the React Quill component
import 'react-quill/dist/quill.snow.css'; // Import the Quill CSS
import './home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');

  const handleChange = (value) => {
    setText(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      console.log(text)// Prevent the default behavior of the Enter key (new line)
      setInput(text);
      setText(''); // Store the plain text in the input state and clear the editor text
    }
  };

  // Customize the toolbar
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ],
  };

  // Specify custom styles
  const formats = [
    'bold', 'italic', 'underline',
    'list', 'bullet', 'link', 'image',
  ];

 

  return (
    <>
      <div className='react'>
        <ReactQuill value={text} onChange={handleChange} onKeyDown={handleKeyDown} modules={modules} formats={formats} />
      </div>
      <h1>{input}</h1>
      {/* <div dangerouslySetInnerHTML={{__html:text}}/> */}
      <div dangerouslySetInnerHTML={{__html:input}}/>
      
    </>
  );
};

export default Home;