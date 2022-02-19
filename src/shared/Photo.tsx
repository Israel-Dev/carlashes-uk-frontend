import Image from './Photo.styled';

interface Props {
    img: string;
    alt: string;
}

const Photo = ({ img, alt }: Props) => {
    return <Image src={img} alt={alt} />;
};

export default Photo;
