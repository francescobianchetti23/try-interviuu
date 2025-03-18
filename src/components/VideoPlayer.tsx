
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoPlayerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  candidateName: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  isOpen,
  setIsOpen,
  candidateName,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden rounded-md border border-border/20">
        <DialogHeader className="p-4 flex flex-row items-center justify-between">
          <DialogTitle className="text-sm font-medium">60-Second Introduction: {candidateName}</DialogTitle>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full h-7 w-7 flex items-center justify-center hover:bg-muted"
          >
            <X className="h-3 w-3" />
          </button>
        </DialogHeader>
        <div className="aspect-video bg-black flex items-center justify-center text-white">
          {/* This would be replaced with an actual video player in a real implementation */}
          <div className="text-center p-8">
            <p className="mb-2 text-base font-medium">Video Placeholder</p>
            <p className="text-white/70 text-xs">
              In a real implementation, this would be a 60-second video introduction
              from the candidate, accessible to recruiters if they choose to view it.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;
