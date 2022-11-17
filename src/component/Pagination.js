import PaginationBottom from '@material-ui/lab/Pagination';
import '../styles/pagination.css';

export default function Pagination({totalPage, onChange}) {
    return (
      <div className="pagination">
        <PaginationBottom count={totalPage} color='secondary' size="large" onChange={onChange}/>
      </div>
    );
  }