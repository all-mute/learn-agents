import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

// Функция для определения правильного суффикса числительного в английском языке
function getNumberSuffix(num: number): string {
  // Проверка на исключения: 11, 12, 13 всегда с "th"
  if (num % 100 >= 11 && num % 100 <= 13) {
    return 'th';
  }

  // Для остальных чисел проверяем последнюю цифру
  switch (num % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export default function GitHubStars(): React.ReactNode {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Получаем данные о репозитории с GitHub API
    fetch('https://api.github.com/repos/all-mute/learn-agents')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStars(data.stargazers_count);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub stars:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <span>Loading stars...</span>;
  }

  if (error || stars === null) {
    return (
      <a href="https://github.com/all-mute/learn-agents" target="_blank" rel="noopener noreferrer">
        Star us on GitHub
      </a>
    );
  }

  const nextStar = stars + 1;
  const suffix = getNumberSuffix(nextStar);

  return (
    <div className={styles.githubStarsContainer}>
      <a 
        href="https://github.com/all-mute/learn-agents" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.githubStarsLink}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24"
          className={styles.starIcon}
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
        </svg>
        <span className={styles.starText}>
          In order not to lose the book, please add {nextStar}{suffix} star on GitHub
        </span>
      </a>
    </div>
  );
} 