"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CallControls,
  SpeakerLayout,
  PaginatedGridLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, Sparkles, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

interface Props {
  onLeave: () => void;
  meetingName: string;
}

export const CallActive = ({ onLeave, meetingName }: Props) => {
  const { useParticipantCount } = useCallStateHooks();
  const participantCount = useParticipantCount();
  const [callDuration, setCallDuration] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [layout, setLayout] = useState<"grid" | "speaker">("grid");

  useEffect(() => {
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (participantCount <= 2) {
      setLayout("grid");
    } else {
      setLayout("speaker");
    }
  }, [participantCount]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="relative flex flex-col h-screen bg-black text-white overflow-hidden">
      <div
        className={`absolute top-0 left-0 right-0 z-20 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-[#101213]/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center justify-center p-2 rounded-full shadow-lg hover:scale-105 transition"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </Link>

              <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-white">
                  {meetingName}
                </h4>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse" />
                    En vivo
                  </Badge>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatDuration(callDuration)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">{participantCount}</span>
              </div>

              <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 text-xs">
                <Sparkles className="w-3 h-3 mr-1" />
                IA Activa
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {!showHeader && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowHeader(true)}
          className="absolute top-3 right-3 z-20 text-white hover:bg-white/10"
        >
          <ChevronDown className="w-4 h-4" />
        </Button>
      )}
      <br />
      <br />
      <br />

      <div className="flex-1 pt-20 pb-28">
        <div className="w-full h-full">
          {layout === "grid" ? (
            <PaginatedGridLayout groupSize={2} />
          ) : (
            <SpeakerLayout participantsBarPosition="bottom" />
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-[#101213] backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
          <CallControls onLeave={onLeave} />
        </div>
      </div>
    </div>
  );
};
