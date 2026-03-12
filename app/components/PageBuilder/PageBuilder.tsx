import HeroBlock from "./blocks/HeroBlock";
import ImageBlock from "./blocks/ImageBlock";

const REGISTRY = {
  hero: HeroBlock,
  imageblock: ImageBlock,      // use whatever the actual typeHandle is
};



export default function PageBuilder({ blocks = [] }) {
  return (
    <>
      {blocks.map((block) => {
        const key = block.typeHandle; // Craft-provided handle
        const Component = REGISTRY[key];

        console.log(blocks.map((b) => ({
        id: b.id,
        typeHandle: b.typeHandle,
        typename: b.__typename,
      })));

        if (!Component) {
          return (
            <div key={block.id}>
              Unknown block typeHandle: {block.typeHandle} ({block.__typename})
            </div>
          );
        }

        return <Component key={block.id} block={block} />;
      })}
    </>
  );
}