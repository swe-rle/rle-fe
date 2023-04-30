import { SocialAuthService } from "@abacritt/angularx-social-login";
import { Directive, OnInit, Input, ElementRef } from "@angular/core";
import { take } from "rxjs";

declare var google: { accounts: { id: { renderButton: (arg0: any, arg1: { type: string; size: string; text: string; theme: string; }) => void; }; }; };

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'google-signin-butt'
})
export class GoogleSigninButtDirective implements OnInit {

    @Input('selectable')
  option: boolean = false;

    constructor(private el: ElementRef, private socialAuthService: SocialAuthService) {
    }

    ngOnInit() {
        if (!this.option) return;
        this.socialAuthService.initState.pipe(take(1)).subscribe(() => {
            google.accounts.id.renderButton(this.el.nativeElement, {
                type: 'standard',
                size: 'medium',
                text: 'signin_with',
                theme: 'filled_blue'
            });
        });
    }
}
