import React, { Dispatch, FC, ReactNode, useState } from 'react';
import { createContext } from 'react';
import { onePhoto, UserInfo } from '../model/model';
import { UsersPhoto } from '../../components/model/model';
import { quotesType } from '../model/model';
import { getCurrentData } from '../variables';

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
  photos: onePhoto[];
  setPhotos: Dispatch<React.SetStateAction<onePhoto[]>>;
  currentDate: string;
  setCurrentDate: Dispatch<React.SetStateAction<string>>;
  isEdit: boolean;
  setIsEdit: Dispatch<React.SetStateAction<boolean>>;
  quoteId: number;
  setQuoteId: Dispatch<React.SetStateAction<number>>;
  photoId: number;
  setPhotoId: Dispatch<React.SetStateAction<number>>;
  date: string;
  setDate: Dispatch<React.SetStateAction<string>>;
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
  const [photos, setPhotos] = useState<onePhoto[]>([]);
  const [currentDate, setCurrentDate] = useState<string>(getCurrentData());
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [quoteId, setQuoteId] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [photoId, setPhotoId] = useState<number>(0);
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
        currentDate,
        setCurrentDate,
        isEdit,
        setIsEdit,
        quoteId,
        setQuoteId,
        date,
        setDate,
        photoId,
        setPhotoId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
