import styled from 'styled-components';
import { useForm } from 'react-hook-form'


const FORM = styled.form`
  display : flex;
  flex-direction:column;
  padding:3em;
  border-radius:10px;
  gap:1em;
  width:80%;
  max-width:500px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
  transition: all .3s cubic-bezier(0, 0, .5, 1);
  &:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
  }
`

const Warn = styled.p`
  color: red;
`

const Button = styled.input`
    color: #444;
`

function RegistForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {

    }
  });
  return (
      <FORM onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      > <label>아이디</label>
        <input {...register("user_id", { required: '아이디는 필수 입력 항목이에요.', minLength: { value: 4, message: '4글자 이상 작성해주세요' } })} placeholder='ID' />
        <Warn>{errors.user_id?.message}</Warn>
        <label>비밀번호</label>
        <input {...register("password", { required: '비밀번호는 필수 입력 항목이에요.', minLength: { value: 4, message: '4글자 이상 작성해주세요' } })} placeholder='PW' />
        <Warn>{errors.password?.message}</Warn>
        <label>이름</label>
        <input {...register("user_name", { required: true })} placeholder='이름' />
        <Warn>{errors.user_name?.message}</Warn>
        <label>캠퍼스 선택</label>
        <select {...register("campus", { required: '캠퍼스는 필수 입력 항목이에요.' })}>
          <option value="">----- 선택하세요 -----</option>
          <option value="seoul">서울</option>
          <option value="daejeon">대전</option>
          <option value="gumi">구미</option>
          <option value="gwangju">광주</option>
          <option value="bulgyeong">부울경</option>
        </select>
        <Warn>{errors.campus?.message}</Warn>
        <label>학번</label>
        <input {...register("student_id", { required: '학번을 입력해주세요.', pattern: {value: /^[0-9]{7,7}$/, message: '7자리 숫자만 작성해주세요'} })} placeholder='학번' />
        <Warn>{errors.student_id?.message}</Warn>
        <label>이메일</label>
        <input {...register("email", { required: '이메일을 입력해주세요.', pattern: {value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, message: '이메일 형식에 맞게 작성해주세요 ex. test@test.com'} })} placeholder='이메일' />
        <Warn>{errors.email?.message}</Warn>
        <label>1학기 트랙 선택</label>
        <select {...register("track_fristSem", { required: '필수 입력 항목이에요.' })}>
          <option value="">----- 선택하세요 -----</option>
          <option value="java_major">Java 전공</option>
          <option value="java_nonmajor">Java 비전공</option>
          <option value="python">Python</option>
          <option value="embeded">Embeded</option>
          <option value="mobile">Mobile</option>
        </select>
        <Warn>{errors.track_fristSem?.message}</Warn>
        <label>포지션</label>
        <select {...register("job1", { required: '필수 입력 항목이에요.' })}>
          <option value="">----- 선택하세요 -----</option>
          <option value="back">백엔드</option>
          <option value="front">프론트엔드</option>
        </select>
        <Warn>{errors.job1?.message}</Warn>
        <label>포지션2 (선택)</label>
        <input {...register("job2")} placeholder='Job2' />
        <label>포지션3 (선택)</label>
        <input {...register("job3")} placeholder='Job3' />
        <input {...register("self_introduction", { required: '자기소개는 필수 입력 항목이에요.', minLength: { value: 4, message: '4글자 이상 작성해주세요' } })} placeholder='자기소개' />
        <Warn>{errors.self_introduction?.message}</Warn>
        <Button type="submit" value={'회원가입'}/>
      </FORM>
  );
}

export default RegistForm;