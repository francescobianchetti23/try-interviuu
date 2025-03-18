
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Volume2 } from "lucide-react";

interface VideoPlayerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  candidateName: string;
  audioOnly?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  isOpen,
  setIsOpen,
  candidateName,
  audioOnly = false,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden rounded-md border border-border/20">
        <DialogHeader className="p-4 flex flex-row items-center justify-between">
          <DialogTitle className="text-sm font-medium">
            {audioOnly ? `60-Second Audio Introduction: ${candidateName}` : `60-Second Introduction: ${candidateName}`}
          </DialogTitle>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full h-7 w-7 flex items-center justify-center hover:bg-muted"
          >
            <X className="h-3 w-3" />
          </button>
        </DialogHeader>
        <div className={`${audioOnly ? 'h-32' : 'aspect-video'} bg-black flex items-center justify-center text-white`}>
          {audioOnly ? (
            <div className="text-center p-8 flex flex-col items-center">
              <Volume2 className="h-8 w-8 mb-2" />
              <p className="mb-2 text-base font-medium">Audio Placeholder</p>
              <p className="text-white/70 text-xs">
                In a real implementation, this would be a 60-second audio introduction
                from the candidate, accessible to recruiters if they choose to listen to it.
              </p>
            </div>
          ) : (
            <div className="text-center p-8">
              <p className="mb-2 text-base font-medium">Video Placeholder</p>
              <p className="text-white/70 text-xs">
                In a real implementation, this would be a 60-second video introduction
                from the candidate, accessible to recruiters if they choose to view it.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;
