import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export const Header = () => {

	const handleViewClick = () => {
		window.open("https://shorturl.at/NVkD1", "_blank");
	};
        const handleDownloadClick = () => {
                window.open("https://drive.usercontent.google.com/download?id=1qvFI6Gru7vGasb9NNL_V4HaHoMMs5LT-&export=download&authuser=0", "_blank");
        };


    return (
        <div className="flex items-center justify-between p-4 ">
            {/* Avatar Section */}
            <div className="flex items-center">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button variant="link">
                            <Avatar className="h-16 w-16 top-5 right-3">
                                <AvatarImage src="https://img.freepik.com/premium-vector/alphabet-letter-icon-logo-letter-logo-logo-letter-design-creative-modern-letter-logo_657409-124.jpg" alt="@shadcn" />
                                <AvatarFallback>Aadarsh</AvatarFallback>
                            </Avatar>
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">@aadarsh</h4>
                                <p className="text-sm">
                                    Dynamic Portfolio – created and maintained by aadarsh-nagrath.
                                </p>
                                <div className="flex items-center pt-2">
                                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                                    <span className="text-xs text-muted-foreground">
                                        Created on 6 Aug&apos;24
                                    </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>

            {/* Buttons Section */}
            <div className="flex space-x-4">
                <Button
                    variant="outline"
                    className="flex items-center space-x-2 hover:bg-transparent focus:outline-none"
                >
                    <ion-icon name="logo-windows"></ion-icon>
                    <span>HOME</span>
                </Button>

                <Button
                    variant="outline"
                    className="flex items-center space-x-2 hover:bg-transparent focus:outline-none"
                >
                    <ion-icon name="logo-windows"></ion-icon>
                    <span>BUTTON</span>
                </Button>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="flex items-center space-x-2 hover:bg-transparent focus:outline-none"
                        >
                            <ion-icon name="cloud-download-outline"></ion-icon>
                            <span>RESUME</span>
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Would you like to download my Resume ??</AlertDialogTitle>
                            <AlertDialogDescription>
                                Click on &quot;View&quot; to just view the resume and &quot;Download&quot; to
                                download the pdf.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>CANCEL</AlertDialogCancel>
                            <AlertDialogAction onClick={handleViewClick}  >VIEW</AlertDialogAction>
                            <AlertDialogAction onClick={handleDownloadClick}>DOWNLOAD</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div>
                <Button>MODE</Button>
            </div>
        </div>
    )
}

export default Header;
