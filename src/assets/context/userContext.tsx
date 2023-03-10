import React, { Dispatch, FC, ReactNode, useState } from 'react';
import { createContext } from 'react';
import { UserInfo } from '../model/model';
import { UsersPhoto } from '../../components/model/model';
export type quotesType = {
  id: number;
  userId: number;
  quotes: string;
  photo: string;
  profileImage: string;
};
export type ContextValue = {
  userInfo: UserInfo | undefined;
  userPhoto: UsersPhoto[] | undefined;
  selectedImage: FileList | undefined;
  setUserPhoto: Dispatch<React.SetStateAction<UsersPhoto[]>>;
  setSelectedImage: Dispatch<React.SetStateAction<FileList | undefined>>;
  setUserInfo: Dispatch<React.SetStateAction<UserInfo | undefined>>;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
  quotes: quotesType[] | undefined;
  setQuotes: Dispatch<React.SetStateAction<quotesType[] | undefined>>;
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: Dispatch<React.SetStateAction<boolean>>;
  photos: { photo: string }[];
  setPhotos: Dispatch<React.SetStateAction<{ photo: string }[]>>;
};
type Props = {
  children: ReactNode;
};

export const UserContext = createContext<ContextValue | null>(null);
export const UserContextProvider: FC<Props> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [selectedImage, setSelectedImage] = useState<FileList | undefined>();
  const [userPhoto, setUserPhoto] = useState<UsersPhoto[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const [quotes, setQuotes] = useState<quotesType[] | undefined>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState<{ photo: string }[]>([]);
  const handleClose = () => setOpen(false);
  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        selectedImage,
        userPhoto,
        setSelectedImage,
        setUserPhoto,
        open,
        setOpen,
        handleOpen,
        handleClose,
        quotes,
        setQuotes,
        loading,
        setLoading,
        error,
        setError,
        photos,
        setPhotos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
