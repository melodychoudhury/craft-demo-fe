import HeroBlock from "./blocks/HeroBlock";
import ImageBlock from "./blocks/ImageBlock";

const REGISTRY = {
  hero: HeroBlock,
  imageblock: ImageBlock,      // use whatever the actual typeHandle is
};



export default function PageBuilder({ blocks = [] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const typeKey = block.typeHandle;
        const Component = REGISTRY[typeKey];
        const blockKey = block.id ?? `${typeKey}-${index}`;

        if (!Component) {
          return (
            <div key={blockKey}>
              Unknown block typeHandle: {block.typeHandle} ({block.__typename})
            </div>
          );
        }

        return <Component key={blockKey} block={block} />;
      })}
    </>
  );
}