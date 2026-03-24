// twoButtons.stories.jsx
import TwoButtons from "../../app/components/ui/twoButtons";

const buttonVariants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
];

const meta = {
  title: "Components/TwoButtons",
  component: TwoButtons,
  tags: ["autodocs"],
  args: {
    link: "/primary",
    label: "Primary action",
    linkSecondary: "/secondary",
    labelSecondary: "Secondary action",
    variant: "default",
    variantSecondary: "secondary",
  },
  argTypes: {
    link: { control: "text" },
    label: { control: "text" },
    linkSecondary: { control: "text" },
    labelSecondary: { control: "text" },
    variant: {
      control: "select",
      options: buttonVariants,
    },
    variantSecondary: {
      control: "select",
      options: buttonVariants,
    },
  },
};

export default meta;

export const Default = {};

export const PrimaryOnly = {
  args: {
    link: "/primary",
    label: "Get started",
    linkSecondary: undefined,
    labelSecondary: undefined,
    variant: "default",
  },
};

export const SecondaryOnly = {
  args: {
    link: undefined,
    label: undefined,
    linkSecondary: "/secondary",
    labelSecondary: "Learn more",
    variantSecondary: "secondary",
  },
};

export const BothButtons = {
  args: {
    link: "/signup",
    label: "Sign up",
    linkSecondary: "/docs",
    labelSecondary: "Read docs",
    variant: "default",
    variantSecondary: "secondary",
  },
};

export const OutlineAndGhost = {
  args: {
    link: "/outline",
    label: "Outline action",
    linkSecondary: "/ghost",
    labelSecondary: "Ghost action",
    variant: "outline",
    variantSecondary: "ghost",
  },
};

export const DestructiveAndLink = {
  args: {
    link: "/delete",
    label: "Delete",
    linkSecondary: "/more",
    labelSecondary: "More info",
    variant: "destructive",
    variantSecondary: "link",
  },
};

export const AllPrimaryVariants = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {buttonVariants.map((variant) => (
        <TwoButtons
          key={variant}
          link={`/${variant}`}
          label={variant}
          variant={variant}
        />
      ))}
    </div>
  ),
};

export const AllPairedVariants = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TwoButtons
        link="/default"
        label="Default"
        variant="default"
        linkSecondary="/secondary"
        labelSecondary="Secondary"
        variantSecondary="secondary"
      />
      <TwoButtons
        link="/outline"
        label="Outline"
        variant="outline"
        linkSecondary="/ghost"
        labelSecondary="Ghost"
        variantSecondary="ghost"
      />
      <TwoButtons
        link="/destructive"
        label="Destructive"
        variant="destructive"
        linkSecondary="/link"
        labelSecondary="Link"
        variantSecondary="link"
      />
    </div>
  ),
};