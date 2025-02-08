import React, { useState } from "react";
import "./posts.css";

const Posts = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");


  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
      sender: "user", //  "user" and "receiver"
    }));
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };


  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: "user",
        text: message,
      };
      setFiles((prevFiles) => [...prevFiles, newMessage]);
      setMessage(""); 
    }
  };


  const deleteMessage = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Posts</h2>
      </div>
      <div className="chat-messages">
        {files.length > 0 ? (
          files.map((file, index) => (
            <div
              key={index}
              className={`message ${file.sender === "user" ? "sender" : "receiver"}`}
            >
              {file.file ? (
                <div className="file-preview">
                  {file.file.type.startsWith("image/") && (
                    <img
                      src={file.url}
                      alt={file.file.name}
                      className="file-preview-img"
                    />
                  )}
                  {file.file.type.startsWith("video/") && (
                    <video controls className="file-preview-video">
                      <source src={file.url} type={file.file.type} />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {file.file.type === "application/pdf" && (
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="file-link"
                    >
                      Open PDF
                    </a>
                  )}
                  {file.file.type ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && (
                    <a href={file.url} download={file.file.name} className="file-link">
                      Download DOCX
                    </a>
                  )}
                </div>
              ) : (
                <div className="text-message">{file.text}</div>
              )}

              <button
                className="delete-button"
                onClick={() => deleteMessage(index)}
              >
                ❌
              </button>
            </div>
          ))
        ) : (
          <div>No messages yet</div>
        )}
      </div>

      <div className="file-input-section">
        <input
          type="file"
          id="file-upload"
          className="file-input"
          multiple
          onChange={handleFileUpload}
          accept="image/*,video/*,.pdf,.docx"
        />
        <label htmlFor="file-upload" className="upload-button">
          Upload File
        </label>
      </div>


      <div className="message-input-section">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={handleMessageChange}
          className="message-input"
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Posts;
