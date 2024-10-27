/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
import { useState } from "react";
import ReactQuill from "react-quill";

const modules = {
  toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
  ],
};

function App() {
  /* styles, height, defaultValue, placeholder */

  // const [query] = useSearchParams();
    const [value, setValue] = useState<string>('');
    // const content = query.get('value') || '';
    // const height = query.get('height') || 150;

    // useLayoutEffect(() => {
    //     setValue(content);
    // }, [content]);
    const handleChange = (value: string) => {
        try {
            window.postMessage(value);
            // window?.ReactNativeWebView?.postMessage(value);
        } catch (_) {}
        setValue(value);
    };

    return <ReactQuill  modules={modules} value={value} onChange={handleChange} style={{height: '92vh', padding: 0, margin: 0}} />
}

export default App