import ContentLoader from 'react-content-loader';

import { Page } from '../../../../components/shared/page';
import useWindowSize from '../../../../hooks/use-window-size';

interface UserPageSkeletonProps {
  className?: string;
}

export const UserPageSkeleton = (props: UserPageSkeletonProps) => {
  const { isMobile } = useWindowSize();

  const mobileSkeleton = (
    <ContentLoader
      speed={2}
      width={320}
      height={250}
      viewBox="0 0 320 250"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="153" cy="187" r="62" />
      <rect x="53" y="22" rx="0" ry="0" width="201" height="44" />
      <rect x="73" y="80" rx="0" ry="0" width="155" height="39" />
    </ContentLoader>
  );

  const desktopSkeleton = (
    <ContentLoader
      speed={2}
      width={329}
      height={160}
      viewBox="0 0 329 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="69" cy="73" r="62" />
      <rect x="163" y="18" rx="0" ry="0" width="228" height="61" />
      <rect x="167" y="114" rx="0" ry="0" width="160" height="11" />
    </ContentLoader>
  );

  return (
    <Page className="user-page" withHeader>
      <div className="user-page-header">
        <div className="user-page-header-container">
          {isMobile ? mobileSkeleton : desktopSkeleton}
        </div>
      </div>
    </Page>
  );
};
