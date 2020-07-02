import {Injectable} from '@angular/core'
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class AnalGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(){
    if(!this.auth.isAnalyst()){
      this.router.navigateByUrl('/profile')
      return false
    }
    return true
  }
}

