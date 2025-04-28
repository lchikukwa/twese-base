import Image from "next/image";

export default function Home() {
  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <Image
        src={`/images/tweselogo.webp`}
        alt="Twese Mart"
        height={1000}
        width={1000}
        style={{ height: "auto", width: "25%" }}
        className="img-fluid mx-auto"
      />
    </div>
  );
}
