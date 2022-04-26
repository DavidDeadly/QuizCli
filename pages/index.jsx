import { useId } from 'react';

export default function Home({ questions }) {
  const id = useId();

  return (
    <div>
      {questions.map(q => (
        <ul key={q.id}>
          <h1>
            {q.question} Ans = {q.corrAnsIndex}
          </h1>
          <ol>
            {q.allAnswers.map(a => {
              const aId = a.toUpperCase().replace(/\s/g, '').substring(0, 15);
              return (
                <li key={aId} id={aId}>
                  {a}
                </li>
              );
            })}
          </ol>
        </ul>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const questions = await fetch('http://192.168.1.66:3000/api/hello').then(r => r.json());
  return {
    props: {
      questions,
    },
  };
}
