import Link from 'next/link'
import Image from 'next/image'
const getBGcolor = (id) => {
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "teal",
      "purple",
      "gray",
    ];
    return colors[id - 1] || colors[Math.random() * colors.length];
  };
const Artwork = ({artwork}) => {
    const color = getBGcolor(artwork.id);
    return (
        <div className={`bg-[${color}]`}>
             <div className="flex md:px-10 md:pt-40">
        <div className="flex-1">
          <span className="block pb-10">
            <Link href="/">
                <a className="uppercase flex space-x-2 items-center">
                <Image src="/chevronback.svg" width={10} height={16} alt="Back to home page" />
              <span>back</span>
                </a>
            </Link>
          </span>
          <div className="border-r border-gray-700 pr-4">
          <img
            src={`https://www.artic.edu/iiif/2/${detail.image_id}/full/843,/0/default.jpg`}
            alt={detail.title}
          />
          <div className="pt-5">
              <span className="block">Artist: {detail?.artist_title}</span>
              <span className="block">{detail?.artist_display}</span>
              <span className="block">Credit Line: {detail?.credit_line}</span>
              <span className="block">Place of origin: {detail?.place_of_origin}</span>
              <span className="block">Dimensions: {detail?.dimensions}</span>
          </div>
          </div>
        </div>
        <div className="flex-1 md:pl-10">
            <span className="uppercase text-xl block pb-10">{detail?.artwork_type_title}</span>
        <h1 className="text-8xl font-semibold font-italiana">{detail.title}</h1>
          <h2 className="text-xl pt-6">{detail?.artist_display}</h2>
          {detail?.exhibition_history && (
              <div className="md:pt-12">
                  <h3 className="text-4xl font-medium">Exhibition History</h3>
                  <p className="text-gray-600 pt-5">{detail?.exhibition_history}</p>
              </div>
          )}
          {detail?.publication_history && (
              <div className="md:pt-12">
              <h3 className="text-4xl font-medium">Publication History</h3>
              <p className="pt-5 text-gray-800">{detail?.publication_history}</p>
            </div>
          )}
        </div>
      </div>
        </div>
    )
}
export default Artwork
