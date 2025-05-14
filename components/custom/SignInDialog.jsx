import React, { useContext } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Lookup from '@/data/Lookup';
import { Button } from '../ui/button';
import { useGoogleLogin } from '@react-oauth/google';
import { UserDetailContext } from '@/context/UserDetailContext';
import axios from 'axios';
import { useMutation } from 'convex/react';
import uuid4 from 'uuid4';
import { api } from '@/convex/_generated/api';

function SignInDialog({ openDialog, closeDialog }) {
  const { useDetail, setUserDetail } = useContext(UserDetailContext);
  const CreateUser = useMutation(api.user.CreateUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: {
            Authorization: 'Bearer ' + tokenResponse?.access_token,
          },
        }
      );

      console.log(userInfo);
      const user = userInfo.data;

      await CreateUser({
        name: user.name,
        email: user.email,
        picture: user.picture,
        uid: uuid4(),
      });

      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
      }

      setUserDetail(userInfo?.data);
      closeDialog(false);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl text-center text-white">
            {Lookup.SIGNIN_HEADING}
          </DialogTitle>

          <DialogDescription>
  <p className="mt-2 text-center text-muted-foreground text-sm">
    {Lookup.SIGNIN_SUBHEADING}
  </p>
</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center gap-3 mt-4">
          <Button
            className="bg-red-500 text-white hover:bg-red-400 mt-3"
            onClick={googleLogin}
          >
            Sign In With Google
          </Button>

          <p className="text-xs text-center mt-3">
            {Lookup.SIGNIn_AGREEMENT_TEXT}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SignInDialog;
