import { CommentModel } from '../db/models/commentModel';

class CommentService {
    private commentModel: CommentModel;

    constructor(commentModel: CommentModel) {
        this.commentModel = commentModel;
    }

    async addComment(commentInfo: CommentInfo): Promise<Comment> {
        // db에 저장
        const createdNewComment = await this.commentModel.create(commentInfo);

        return createdNewComment;
    }

    async getComments(): Promise<Comment[]> {
        const comments = await this.commentModel.findAll();

        return comments;
    }

    async getCommentsByGroupId(groupId: number): Promise<Comment[]> {
        const comments = await this.commentModel.findAllByGroupId(groupId);

        return comments;
    }

    async getCommentsByUserId(userId: number): Promise<Comment[]> {
        const comments = await this.commentModel.findAllByUserId(userId);

        return comments;
    }

    async setComment(commentId: number, toUpdate: CommentInfo): Promise<Comment> {
        const updatedComment = await this.commentModel.update({
            commentId,
            update: toUpdate,
        });

        return updatedComment;
    }

    async deleteCommentData(commentId: number): Promise<{ result: string }> {
        const { deletedCount } = await this.commentModel.deleteById(commentId);

        // 삭제에 실패한 경우, 에러 메시지 반환
        if (deletedCount === 0) {
            throw new Error(`${commentId} 삭제 되지 않았습니다. 다시 시도해 주세요.`);
        }

        return { result: "success" };
    }
}

const commentService = new CommentService(new CommentModel());

export { commentService };






// `CommentInfo`, Comment 인터페이스 정의 하기
// `CommentModel` 정의
interface CommentInfo {
    userId: number;
    groupId: number;
    text: string;
}

interface Comment {
    id: number;
    userId: number;
    groupId: number;
    text: string;
}

class CommentModel {
    async create(commentInfo: CommentInfo): Promise<Comment> {
        // create logic
    }

    async findAll(): Promise<Comment[]> {
        // findAll logic
    }

    async findAllByGroupId(groupId: number): Promise<Comment[]> {
        // findAllByGroupId logic
    }

    async findAllByUserId(userId: number): Promise<Comment[]> {
        // findAllByUserId logic
    }
}
