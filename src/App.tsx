/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
import { useLayoutEffect, useState } from "react";
import ReactQuill from "react-quill";

const modules = {
  toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
  ],
};

function App() {
    const [height, setHeight] = useState('100vh');
    const [placeholder, setPlaceholder] = useState('Type your message here');
    const [value, setValue] = useState('');
    const [styles, setStyles] = useState({});

    const params = new URLSearchParams(document.location.search);
    const _value = params.get("value");
    const _height = params.get("height");
    const _placeholder = params.get("placeholder");
    const _styles = params.get("styles");

     useLayoutEffect(() => {
        setValue(_value || '');
        setPlaceholder(_placeholder || 'Type your message here');
        setHeight(_height || '100vh');
        try{
          if(_styles){
            setStyles(JSON.parse(_styles));
          }
        }
        catch(_){}
    }, []);


    const handleChange = (value: string) => {
        try {
          window.postMessage(value);
          // @ts-ignore
          window?.ReactNativeWebView?.postMessage(value);
        } catch (_) {}
        setValue(value);
    };

    return <ReactQuill placeholder={placeholder} modules={modules} value={value} onChange={handleChange} style={{height: `calc(${height} - 41.6px)`, padding: 0, margin: 0, ...styles}} />
}

export default App