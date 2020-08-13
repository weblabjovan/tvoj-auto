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
            <meta
                name="description"
                content={description || ""}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
    )
}

export default HeadComp;