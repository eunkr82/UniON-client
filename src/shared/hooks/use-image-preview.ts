import { useEffect, useRef, useState } from 'react';

export const useImagePreview = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const lastObjectUrlRef = useRef<string>('');

  const setFile = (file: File) => {
    setFileName(file.name);

    const nextUrl = URL.createObjectURL(file);

    if (lastObjectUrlRef.current !== '') {
      URL.revokeObjectURL(lastObjectUrlRef.current);
    }

    lastObjectUrlRef.current = nextUrl;
    setImageUrl(nextUrl);
  };

  const remove = () => {
    if (lastObjectUrlRef.current !== '') {
      URL.revokeObjectURL(lastObjectUrlRef.current);
      lastObjectUrlRef.current = '';
    }
    setImageUrl('');
    setFileName('');
  };

  useEffect(() => {
    return () => {
      if (lastObjectUrlRef.current !== '') {
        URL.revokeObjectURL(lastObjectUrlRef.current);
      }
    };
  }, []);

  return {
    imageUrl,
    fileName,
    setFile,
    remove,
  };
};
