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

export default function SideNav() {
  return (
    <>
      <div className="flex flex-col w-16 absolute top-[27%] mx-2 gap-4">
        <div className="flex flex-col justify-evenly items-center space-y-8">
          <Button variant="ghost">
            <ion-icon name="home-sharp" style={{ fontSize: '30px', color: 'gray' }}></ion-icon>
          </Button>
          <Button variant="ghost">
            <ion-icon name="caret-up-circle-sharp" style={{ fontSize: '30px', color: 'gray' }}></ion-icon>
          </Button>
          <Button variant="ghost">
            <ion-icon name="navigate-sharp" style={{ fontSize: '30px', color: 'gray' }}></ion-icon>
          </Button>
          <Button variant="ghost">
            <ion-icon name="trophy-sharp" style={{ fontSize: '30px', color: 'gray' }}></ion-icon>
          </Button>
          <Button variant="ghost">
            <ion-icon name="aperture-sharp" style={{ fontSize: '30px', color: 'gray' }}></ion-icon>
          </Button>
          <Button variant="ghost">
            <ion-icon name="mail-open-sharp" style={{ fontSize: '30px', color: 'gray' }}></ion-icon>
          </Button>
        </div>

        {/* avatar and settings */}
        <div className="flex flex-col justify-evenly items-center mt-32">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost">
                <ion-icon name="settings-sharp" style={{ fontSize: '30px', color: 'gray' }}></ion-icon>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>DashBoard Login</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="id" className="text-right">
                    App-id
                  </Label>
                  <Input
                    id="id"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="pasword"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="destructive" type="submit">Login</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Avatar className="mt-5">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
