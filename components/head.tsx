import Head from 'next/head';

type HeadProps = {
    title: string,
    description: string,
}

const HeadComp = (props: HeadProps) => {
    const { title, description } = props;

    return(
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default HeadComp;