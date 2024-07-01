import ContentLoader from 'react-content-loader';

interface SkeletonProps {
  className?: string;
}

export const UserCardSkeleton = (props: SkeletonProps) => (
  <ContentLoader
    speed={2}
    width={329}
    height={320}
    viewBox="0 0 329 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="72" y="140" rx="0" ry="0" width="125" height="24" />
    <rect x="195" y="206" rx="0" ry="0" width="34" height="31" />
    <circle cx="131" cy="65" r="62" />
    <rect x="41" y="206" rx="0" ry="0" width="102" height="33" />
  </ContentLoader>
);
