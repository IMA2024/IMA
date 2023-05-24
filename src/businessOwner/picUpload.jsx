import { useState } from 'react';
import { FileInput, Button, useMantineNotifications } from '@mantine/core';

export default function UploadPic() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { notifications, createNotification } = useMantineNotifications();

  const handleFileChange = (files) => {
    setSelectedFile(files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('your-upload-endpoint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        createNotification({
          title: 'Upload successful',
          message: 'The picture was uploaded successfully.',
          color: 'teal',
        });
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      createNotification({
        title: 'Upload error',
        message: 'There was an error while uploading the picture.',
        color: 'red',
      });
    }
  };

  return (
    <div>
      <FileInput
        label="Upload Picture"
        accept="image/*"
        onChange={handleFileChange}
        value={selectedFile ? selectedFile.name : ''}
      />

      <Button disabled={!selectedFile} onClick={handleUpload}>
        Upload
      </Button>

      {notifications}
    </div>
  );
}
