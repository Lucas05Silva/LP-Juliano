import { existsSync } from "node:fs";
import { join } from "node:path";
import { PORTFOLIO_PHOTOS } from "@/lib/constants";
import { PortfolioGallery } from "./portfolio-gallery";

export function Portfolio() {
  const availableIds = PORTFOLIO_PHOTOS.filter((photo) =>
    existsSync(join(process.cwd(), "public", photo.src)),
  ).map((photo) => photo.id);

  return <PortfolioGallery availableIds={availableIds} />;
}
