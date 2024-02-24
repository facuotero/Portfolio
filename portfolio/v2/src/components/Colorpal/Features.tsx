import Feature from "./Feature";

export default function Features() {
  return (
    <section
      id="features"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Features
        </h2>

        {/* Features Grid */}
        <div className="mx-10 mt-12 grid gap-[6rem] xl:mx-0">
          <Feature
            infoOrder="first"
            image="Eyedropper.gif"
            description="The Eyedropper tool lets users select colors directly from their screen with pixel-level precision. It simplifies color matching and replication in various developing, design and editing tasks."
            button={{
              link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
              text: "Add Now",
            }}
          >
            Eyedropper
          </Feature>

          <Feature
            infoOrder="last"
            image="ColorPicker.gif"
            description="The Color Picker tool is a user-friendly utility to select specific colors from a palette. It streamlines the process of choosing colors, offering efficiency and precision in color selection."
            button={{
              link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
              text: "Try it Now",
            }}
          >
            Color Picker
          </Feature>

          <Feature
            infoOrder="first"
            image="TintsandShades.gif"
            description="The Tints and Shades tool is a handy resource for adjusting colors by adding white (tints) or black (shades). It helps create variations of a base color, achieving a range of lighter and darker tones with ease."
            button={{
              link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
              text: "Add Now",
            }}
          >
            Tints and Shades
          </Feature>

          <Feature
            infoOrder="last"
            image="MoveandDelete.gif"
            description="The Move tool allows users to change colors position, facilitating organization and arrangement. The Delete tool removes unwanted colors, streamlining the color selection process and enhancing overall efficiency."
            button={{
              link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
              text: "Try it Now",
            }}
          >
            Move and Delete
          </Feature>

          <Feature
            infoOrder="first"
            image="DonwloadPNGandCSV.gif"
            description="The Download Image tool enables users to save their color palette as an image file, making it easy to share and reference. The Download CSV tool allows users to export their colors codes to a CSV file, which can be useful for managing and cataloging color information in a structured format."
            button={{
              link: "https://chromewebstore.google.com/detail/colorpal-color-picker-eye/mbnpegpimodgjmlbfhkkdgbcfjmgpoad",
              text: "Add Now",
            }}
          >
            Donwload Image and CSV
          </Feature>
        </div>
      </div>
    </section>
  );
}
