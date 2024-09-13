import React from "react";

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
    <div className="bg-gradient-to-r bg-black rounded-lg shadow-lg flex items-center w-full">
      <img
        src={avatar_url}
        alt={`${name}'s avatar`}
        className="rounded-full w-24 h-24 border-4 border-white shadow-lg"
      />
      <div className="ml-6 text-white">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-xl italic">{bio || "Code my amigo!"}</p>
        <p className="mt-2 text-sm">{location}</p>
        <div className="mt-4 space-y-2">
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-4 py-1 rounded-md shadow hover:bg-gray-100"
          >
            GitHub Profile
          </a>
        </div>
        <div className="mt-4 flex gap-6">
          <div>
            <span className="font-bold">{public_repos}</span>
            <p>Repositories</p>
          </div>
          <div>
            <span className="font-bold">{followers}</span>
            <p>Followers</p>
          </div>
          <div>
            <span className="font-bold">{following}</span>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitCard;
