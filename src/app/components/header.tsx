import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { CalendarDays, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
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
import { motion } from "framer-motion"

export const Header = () => {
	const { theme, setTheme } = useTheme()

	const handleViewClick = () => {
		window.open("https://shorturl.at/NVkD1", "_blank");
	};
    const handleDownloadClick = () => {
        window.open("https://drive.usercontent.google.com/download?id=1qvFI6Gru7vGasb9NNL_V4HaHoMMs5LT-&export=download&authuser=0", "_blank");
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };

    const avatarVariants = {
        hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
        tap: { scale: 0.95 }
    };

    return (
        <motion.div 
            className="flex items-center justify-between p-4 bg-background"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Avatar Section */}
            <motion.div 
                className="flex items-center"
                variants={itemVariants}
            >
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <motion.div
                            variants={avatarVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Button variant="link" className="text-foreground hover:text-primary">
                                <Avatar className="h-16 w-16 top-5 right-3">
                                    <AvatarImage src="https://img.freepik.com/premium-vector/alphabet-letter-icon-logo-letter-logo-logo-letter-design-creative-modern-letter-logo_657409-124.jpg" alt="@shadcn" />
                                    <AvatarFallback>Aadarsh</AvatarFallback>
                                </Avatar>
                            </Button>
                        </motion.div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-card text-card-foreground border-border">
                        <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold text-foreground">@aadarsh</h4>
                                <p className="text-sm text-muted-foreground">
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
            </motion.div>

            {/* Buttons Section */}
            <motion.div 
                className="flex space-x-4"
                variants={itemVariants}
            >
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button
                        variant="outline"
                        className="flex items-center space-x-2 border-border hover:bg-accent hover:text-accent-foreground focus:outline-none"
                    >
                        <ion-icon name="logo-windows"></ion-icon>
                        <span>HOME</span>
                    </Button>
                </motion.div>

                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button
                        variant="outline"
                        className="flex items-center space-x-2 border-border hover:bg-accent hover:text-accent-foreground focus:outline-none"
                    >
                        <ion-icon name="logo-windows"></ion-icon>
                        <span>BUTTON</span>
                    </Button>
                </motion.div>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                            <Button
                                variant="outline"
                                className="flex items-center space-x-2 border-border hover:bg-accent hover:text-accent-foreground focus:outline-none"
                            >
                                <ion-icon name="cloud-download-outline"></ion-icon>
                                <span>RESUME</span>
                            </Button>
                        </motion.div>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-card text-card-foreground border-border">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-foreground">Would you like to download my Resume ??</AlertDialogTitle>
                            <AlertDialogDescription className="text-muted-foreground">
                                Click on &quot;View&quot; to just view the resume and &quot;Download&quot; to
                                download the pdf.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="border-border hover:bg-accent hover:text-accent-foreground">CANCEL</AlertDialogCancel>
                            <AlertDialogAction onClick={handleViewClick} className="bg-primary text-primary-foreground hover:bg-primary/90">VIEW</AlertDialogAction>
                            <AlertDialogAction onClick={handleDownloadClick} className="bg-primary text-primary-foreground hover:bg-primary/90">DOWNLOAD</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </motion.div>
            <motion.div variants={itemVariants}>
                <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-border hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Header;
