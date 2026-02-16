import { TeamIcon } from '@shared/assets';
import Button from '@shared/ui/components/button/button';
import Chip from '@shared/ui/components/chip/chip';

import * as styles from './post-card.css';

export type Recruit = { roleId: number; roleName: string; roleCount: number };
export type Domain = { id: number; name: string };

export interface PostCardProps {
  postId: number;
  title: string;
  domain: Domain[];
  dday: number;
  recruits: Recruit[];
  nowCount: number;
  applied: boolean;
  onOpenDetail: (postId: number) => void;
  onToggleApply: (postId: number) => void;
}

const formatRecruits = (recruits: Recruit[] = [], visibleCount = 2) => {
  const visible = recruits.slice(0, visibleCount);
  const hasMore = recruits.length > visibleCount;

  const text = visible.map((r) => `${r.roleName} ${r.roleCount}명`).join('\n');

  return hasMore ? `${text}...` : text;
};

const PostCard = ({
  postId,
  title,
  domain,
  dday,
  recruits,
  nowCount,
  applied,
  onOpenDetail,
  onToggleApply,
}: PostCardProps) => {
  return (
    <article
      className={styles.cardContainer}
      aria-label={title}
      onClick={() => onOpenDetail(postId)}
    >
      <span className={styles.dday}>D-{dday}</span>

      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        <div className={styles.roleContainer}>
          <p className={styles.role}>{formatRecruits(recruits)}</p>
        </div>
      </div>

      <div className={styles.nowCountContainer}>
        <TeamIcon className={styles.iconContainer} />
        <p>{nowCount}명</p>
      </div>

      <div className={styles.domainContainer}>
        {domain.map((d) => (
          <Chip key={d.id}>{d.name}</Chip>
        ))}
      </div>

      <Button
        color={applied ? 'gray' : 'primary'}
        onClick={(e) => {
          e.stopPropagation();
          onToggleApply(postId);
        }}
      >
        {applied ? '지원 취소' : '지원하기'}
      </Button>
    </article>
  );
};

export default PostCard;
