function Error({ statusCode }){
    return (
        <p>
            {statusCode
                ? `An error ${statusCode}. ocurred on server`
                : `An error occurred on client`
            }
        </p>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;