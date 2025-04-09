import { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchQuery.trim() === '') return;
    
    // Mock search results - in a real app, this would query a backend
    const mockResults = [
      {
        title: 'Zero Trust Security Architecture',
        type: 'Service',
        url: '#services'
      },
      {
        title: 'AI in Cybersecurity: Friend or Foe?',
        type: 'Blog Post',
        url: '#blog'
      },
      {
        title: 'Enterprise Security Architecture for Zero Trust',
        type: 'Whitepaper',
        url: '#resources'
      },
      {
        title: 'Global Financial Institution Case Study',
        type: 'Case Study',
        url: '#case-studies'
      }
    ].filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(mockResults);
  };
  
  return (
    <div className="search-container">
      <button 
        className="search-toggle"
        onClick={toggleSearch}
        aria-label="Toggle search"
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-search"}></i>
      </button>
      
      <div className={`search-overlay ${isOpen ? 'open' : ''}`}>
        <div className="search-content">
          <form onSubmit={handleSearch}>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search for services, resources, articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus={isOpen}
              />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          
          {searchResults.length > 0 && (
            <div className="search-results">
              <h3>Search Results</h3>
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index}>
                    <a href={result.url} onClick={toggleSearch}>
                      <div className="result-type">{result.type}</div>
                      <div className="result-title">{result.title}</div>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {searchQuery && searchResults.length === 0 && (
            <div className="no-results">
              <p>No results found for "{searchQuery}"</p>
              <p>Try different keywords or contact us for assistance</p>
            </div>
          )}
          
          {!searchQuery && (
            <div className="search-suggestions">
              <h3>Popular Searches</h3>
              <div className="suggestion-tags">
                <span onClick={() => setSearchQuery('zero trust')}>Zero Trust</span>
                <span onClick={() => setSearchQuery('ransomware')}>Ransomware</span>
                <span onClick={() => setSearchQuery('cloud security')}>Cloud Security</span>
                <span onClick={() => setSearchQuery('AI')}>AI Security</span>
                <span onClick={() => setSearchQuery('compliance')}>Compliance</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
