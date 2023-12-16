import AppLayout from '../../components/AppLayout';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form'


const FORM = styled.form`
  display : flex;
  flex-direction:column;
  border : 1px solid black;
  padding:3em;
  border-radius:10px;
  gap:1em;
`

function Test() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {

    }
  });
  console.log(errors);
  return (
    <AppLayout>
      <h2>회원가입</h2>
      <FORM onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      >
        <input {...register("ID", { required: 'ID는 필수 입력 항목이에요' })} placeholder='ID' />
        <p>{errors.ID?.message}</p>
        <input {...register("password", { required: true })} placeholder='PW' />
        <input {...register("NAME", { required: true })} placeholder='이름' />
        <input {...register("campus", { required: true })} placeholder='캠퍼스' />
        <input {...register("student_id", { required: true })} placeholder='학번' />
        <input {...register("email", { required: true })} placeholder='이메일' />
        <input {...register("track_fristSem", { required: true })} placeholder='1학기 트랙' />
        <input {...register("job1", { required: true })} placeholder='Job1' />
        <input {...register("job2")} placeholder='Job2' />
        <input {...register("job3")} placeholder='Job3' />
        <input {...register("self_introduction", { required: '자기소개는 필수 입력 항목이에요', minLength: { value: 4, message: '4글자이상 쓰세요' } })} placeholder='자기소개' />
        <p>{errors.self_introduction?.message}</p>
        <input type="submit" />
      </FORM>
    </AppLayout>
  );
}

export default Test;
