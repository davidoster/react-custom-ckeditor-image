import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import EditorPlus from 'ckeditor5-classic-plus'; 

export default function Editor() {
    const [article, setArticle] = useState();
    
    return (
      <CKEditor
        editor={EditorPlus}
        data={article}
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setArticle(data);
        }}
        config={{
          simpleUpload: {
            // The URL that the images are uploaded to.
            uploadUrl: "http://localhost:5094/BufferedFileUpload",
            
            // Enable the XMLHttpRequest.withCredentials property if required.
            withCredentials: true,
  
            // Headers sent along with the XMLHttpRequest to the upload server.
            headers: {
              "X-CSRF-TOKEN": "CSFR-Token",
              Authorization: "Bearer <JSON Web Token>"
            }
          }
        }}
      />
    );
  }