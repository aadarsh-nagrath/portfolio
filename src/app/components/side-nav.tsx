import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { useState } from "react";

type OnSelectType = {
    OnSelectScreen: (value: number) => void;
}

export default function SideNav({OnSelectScreen}:OnSelectType) {
    const [activeIndx, SetActiveIndx] = useState<number>(0);

    const handleSubmit = (value: number) => {
        SetActiveIndx(value);
        OnSelectScreen(value);
    }

  return (
    <>
      <div className="flex flex-col w-16 absolute top-[27%] mx-2 gap-4">
        <div className="flex flex-col justify-evenly items-center space-y-8">
          <Button 
            variant="ghost" 
            onClick={()=>handleSubmit(0)}
            className={`hover:bg-accent hover:text-accent-foreground ${activeIndx === 0 ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
          >
            <ion-icon name="home-sharp" style={{ fontSize: '30px' }}></ion-icon>
          </Button>
          <Button 
            variant="ghost" 
            onClick={()=>handleSubmit(1)}
            className={`hover:bg-accent hover:text-accent-foreground ${activeIndx === 1 ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
          >
            <ion-icon name="caret-up-circle-sharp" style={{ fontSize: '30px' }}></ion-icon>
          </Button>
          <Button 
            variant="ghost" 
            onClick={()=>handleSubmit(2)}
            className={`hover:bg-accent hover:text-accent-foreground ${activeIndx === 2 ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
          >
            <ion-icon name="navigate-sharp" style={{ fontSize: '30px' }}></ion-icon>
          </Button>
          <Button 
            variant="ghost" 
            onClick={()=>handleSubmit(3)}
            className={`hover:bg-accent hover:text-accent-foreground ${activeIndx === 3 ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
          >
            <ion-icon name="trophy-sharp" style={{ fontSize: '30px' }}></ion-icon>
          </Button>
          <Button 
            variant="ghost" 
            onClick={()=>handleSubmit(4)}
            className={`hover:bg-accent hover:text-accent-foreground ${activeIndx === 4 ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
          > 
            <ion-icon name="aperture-sharp" style={{ fontSize: '30px' }}></ion-icon>
          </Button>
          <Button 
            variant="ghost" 
            onClick={()=>handleSubmit(5)}
            className={`hover:bg-accent hover:text-accent-foreground ${activeIndx === 5 ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
          >
            <ion-icon name="mail-open-sharp" style={{ fontSize: '30px' }}></ion-icon>
          </Button>
        </div>

        {/* avatar and settings */}
        <div className="flex flex-col justify-evenly items-center mt-32">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="ghost"
                className="text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <ion-icon name="settings-sharp" style={{ fontSize: '30px' }}></ion-icon>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-card text-card-foreground border-border">
              <DialogHeader>
                <DialogTitle className="text-foreground">DashBoard Login</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="id" className="text-right text-foreground">
                    App-id
                  </Label>
                  <Input
                    id="id"
                    className="col-span-3 border-border bg-background text-foreground"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right text-foreground">
                    Password
                  </Label>
                  <Input
                    id="pasword"
                    className="col-span-3 border-border bg-background text-foreground"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button 
                  variant="destructive" 
                  type="submit"
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Login
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Avatar className="mt-5 border-2 border-border">
            <AvatarImage src="https://avatars.githubusercontent.com/u/92307537?s=400&u=23303c45284658483e5c271885e4af743bd861d4&v=4" alt="@shadcn" />
            <AvatarFallback className="bg-muted text-muted-foreground">CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
