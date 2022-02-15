import s from "./hr.module.css";
import Image from "next/image";

export function ImageCard({ src, width, height }) {
  return (
    <div className="flex flex-column relative w-full">
      <Image
        src={src}
        width={width}
        height={height}
        alt="shit stuff"
        quality="100"
      />
      <div
        className="flex align-center space-between"
        style={{ marginTop: "1em" }}
      >
        <span>Title</span>
        <span>£50</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className={s.root}>
      <section className={s.content}>
        <div className={s.first}>
          <h1 className={s.firstTitle}>
            ArmChairs <sup className={s.sup}>12</sup>
          </h1>

          <div className={s.firstBottom}>
            <p>
              Mason Concepts was awarded in 2015 must have at Lodz Design
              Festival
            </p>

            <p>
              Mason Concepts was exhibited at the Design Museum London in 2017
            </p>
          </div>
        </div>

        <div className={s.second}>
          <div className={s.imgContainer}>
            <Image
              src="/1.jpg"
              layout="fill"
              objectFit="contain"
              alt="armchair"
              className={s.pone}
            />
          </div>
        </div>
      </section>

      <section className={s.flexContainer}>
        <ImageCard
          src="https://res.cloudinary.com/godwinebikwo/image/upload/c_fit,w_450/v1644734368/Cantarutti-Arco-1-02-I_pruj2l.jpg"
          width={450}
          height={600}
        />

        <ImageCard
          src="https://res.cloudinary.com/godwinebikwo/image/upload/v1640016466/Cantarutti-Yumi-Chair-1.07.I_a8fahu.jpg"
          width={450}
          height={600}
        />

        <ImageCard
          src="https://res.cloudinary.com/godwinebikwo/image/upload/v1644734361/Cantarutti-Arco-1-04-I_vuaaar.jpg"
          width={450}
          height={600}
        />
      </section>

      <div className={s.btnContainer}>
        <button className={s.button}>Shop the collection</button>
      </div>
    </div>
  );
}
