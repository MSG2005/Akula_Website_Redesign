import type { FirmVideo } from "@/data/videos";

export function VideoCard({ video }: { video: FirmVideo }) {
  return (
    <article className="ed-card flex h-full flex-col overflow-hidden bg-background">
      <div className="relative aspect-video w-full shrink-0 bg-ink">
        {video.kind === "mp4" ? (
          <video
            className="absolute inset-0 size-full object-cover"
            src={video.url}
            controls
            preload="metadata"
            playsInline
          />
        ) : (
          <iframe
            src={video.url}
            title={video.title}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2 p-5">
        <h3 className="ed-body line-clamp-2 min-h-[2.8em] text-[15px] font-medium leading-[1.4]">
          {video.title}
        </h3>
        {video.date && <p className="ed-label mt-auto text-gray">{video.date}</p>}
      </div>
    </article>
  );
}
