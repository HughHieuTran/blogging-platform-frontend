import { VoteType } from './vote-type';

export class VotePayload {
    voteType: VoteType | null | undefined;
    postId: number | null | undefined ;
}