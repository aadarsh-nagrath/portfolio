"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Send, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const ContactScreen = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });
        
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send email');
            }

            setSubmitStatus({
                type: 'success',
                message: 'Message sent successfully! I will get back to you soon.'
            });
            
            // Reset form after successful submission
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 md:p-8">
            <motion.div 
                className="container mx-auto max-w-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div 
                    className="text-center mb-12"
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a question or want to work together? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information Cards */}
                    <motion.div 
                        className="space-y-4"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div variants={fadeIn}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <a 
                                                href="mailto:anagrath1@gmail.com"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                anagrath1@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Location</h3>
                                            <p className="text-muted-foreground">Bangalore, India</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-4">Connect with me</h3>
                                    <div className="flex gap-4">
                                        <Link 
                                            href="https://github.com/aadarsh-nagrath" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button 
                                                variant="outline" 
                                                size="icon" 
                                                className="rounded-full hover:bg-primary/10 transition-colors"
                                            >
                                                <Github className="h-5 w-5" />
                                            </Button>
                                        </Link>
                                        <Link 
                                            href="https://www.linkedin.com/in/aadarsh-nagrath/" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button 
                                                variant="outline" 
                                                size="icon" 
                                                className="rounded-full hover:bg-primary/10 transition-colors"
                                            >
                                                <Linkedin className="h-5 w-5" />
                                            </Button>
                                        </Link>
                                        <Link 
                                            href="https://x.com/aadarsh_nagrath" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button 
                                                variant="outline" 
                                                size="icon" 
                                                className="rounded-full hover:bg-primary/10 transition-colors"
                                            >
                                                <Twitter className="h-5 w-5" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        className="lg:col-span-2"
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                    >
                        <Card className="border-2 hover:shadow-lg transition-shadow">
                            <CardHeader className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <CardTitle className="text-2xl">Send a Message</CardTitle>
                                </div>
                                <CardDescription>
                                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <Separator />
                            <form onSubmit={handleSubmit}>
                                <CardContent className="space-y-4 pt-6">
                                    {submitStatus.type && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-4 rounded-md ${
                                                submitStatus.type === 'success' 
                                                    ? 'bg-green-500/10 text-green-500' 
                                                    : 'bg-red-500/10 text-red-500'
                                            }`}
                                        >
                                            {submitStatus.message}
                                        </motion.div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <motion.div 
                                            className="space-y-2"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="h-12"
                                            />
                                        </motion.div>
                                        <motion.div 
                                            className="space-y-2"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="your.email@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="h-12"
                                            />
                                        </motion.div>
                                    </div>
                                    <motion.div 
                                        className="space-y-2"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="What's this about?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="h-12"
                                        />
                                    </motion.div>
                                    <motion.div 
                                        className="space-y-2"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Label htmlFor="message">Message</Label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Type your message here..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </motion.div>
                                </CardContent>
                                <CardFooter>
                                    <motion.div 
                                        className="w-full"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button 
                                            type="submit" 
                                            className="w-full h-12 text-lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                >
                                                    <Send className="h-5 w-5" />
                                                </motion.div>
                                            ) : (
                                                <>
                                                    <Send className="mr-2 h-5 w-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </motion.div>
                                </CardFooter>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactScreen;
