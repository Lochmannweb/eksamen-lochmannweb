/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ujwvsfwvpqnwmozubigr.supabase.co',
                // port: '6543',
                pathname: '/storage/buckets/LochmannWeb'
            }
        ]
    }
};

export default nextConfig;


// {
//     protocol: 'https',
//     hostname: 'ujwvsfwvpqnwmozubigr.supabase.co/storage/v1/s3',
//     port: '6543',
//     pathname: 'postgres'
// }