# next-hosting-test
- Next.jsの静的エクスポートをGitHub Pagesで公開するサンプル

## 備忘録
- configファイルに設定
```
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
      }
};

export default nextConfig;

```

- Imameコンポーネントは次のように設定
```
const BASE_PATH = nextConfig.basePath || "/images";

const page = () => {
    return (
        <>
            <div className="font-bold text-xl flex items-center justify-center">
                サンプル1ページ
            </div>
            <Image src={`${BASE_PATH}/penguin.jpeg`} width={200} height={100} alt="animal" />

```