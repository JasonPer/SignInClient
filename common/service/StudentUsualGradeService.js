import request from '../../components/pocky-request/index.js';

export default class StudentUsualGradeService {
	constructor() {
		this.request = new request();
	}
	getStudentUsualGrade(stuCode) {
		const requestParam = {
			url: "api/stu_grade_detail?studentCode=" + stuCode,
		}
		return this.request.get(requestParam);
	}
}
