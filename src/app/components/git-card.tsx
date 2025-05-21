import React from "react";
import Image from "next/image";

interface ProfileProps {
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

const GitCard: React.FC<ProfileProps> = ({
  avatar_url,
  name,
  bio,
  location,
  html_url,
  public_repos,
  followers,
  following,
}) => {
  return (
    <div className="bg-gradient-to-r bg-black rounded-lg shadow-lg flex items-center w-full p-6">
      <Image
        src={avatar_url}
        alt={`${name}'s avatar`}
        width={96}
        height={96}
        className="rounded-full w-24 h-24 border-4 border-white shadow-lg object-cover"
      />
      <div className="ml-8 flex flex-col w-full">
        {/* Top: Name, Bio, Location */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div>
            <h1 className="text-3xl font-bold text-white">{name}</h1>
            <p className="text-xl italic text-white/90 mt-1">{bio || "Code my amigo!"}</p>
            <p className="mt-2 text-sm text-white/70">{location}</p>
          </div>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-4 py-2 rounded-md shadow hover:bg-gray-100 mt-4 md:mt-0 md:ml-8 font-medium whitespace-nowrap"
          >
            GitHub Profile
          </a>
        </div>
        {/* Bottom: Stats */}
        <div className="mt-6 flex gap-8 text-white/90 justify-start md:justify-between w-full">
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{public_repos}</span>
              <span className="text-xs">Repositories</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{followers}</span>
              <span className="text-xs">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{following}</span>
              <span className="text-xs">Following</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitCard;
